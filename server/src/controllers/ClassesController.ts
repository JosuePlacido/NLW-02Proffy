import{Request,Response} from 'express';
import converHourToMinutes from '../utils/converHourToMinutes';
import db from '../database/connection';

interface ScheduleItem{
    "week_day":number,
    "from":string,
    "to":string
}
export default class ClassesController{
    async create(request:Request,response:Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        const trx = await db.transaction();
        try{
            
        const insertedUserIds = await trx('users').insert({
            name,avatar,whatsapp,bio
        });
    
        const insertedClassesIds = await trx('classes').insert({
            subject,cost,userId:insertedUserIds[0]
        });
    
        const class_schedule = schedule.map((si:ScheduleItem) => {
            return {
                classId: insertedClassesIds[0],
                week_day:si.week_day,
                from: converHourToMinutes(si.from),
                to: converHourToMinutes(si.to)
            }
        });
        await trx('class_schedule').insert(class_schedule);
        await trx.commit();
        return response.status(201).send();
        }catch(err){
            trx.rollback();
            return response.status(500).json({
                error: "Unexpected error whilte creating class"
            });
        }
    }

    async index(request:Request,response:Response){
        const filters = request.query;

        const week_day = filters.week_day as string;
        const time = filters.time as string;
        const subject = filters.subject as string;
        if(!filters.week_day || !filters.subject || !filters.time){
            return response.status(400).json({
                eror:"preencha todos os parametros para filtrar"
            });
        }
        const timeInMinutes = converHourToMinutes(time);        
        const classes = await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*').from('class_schedule')
                .whereRaw('`class_schedule`.`classId` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??',[Number(week_day)])
                .whereRaw('`class_schedule`.`from` <= ??',[Number(timeInMinutes)])
                .whereRaw('`class_schedule`.`to` > ??',[Number(timeInMinutes)])
        })
        .where('classes.subject','=',subject)
        .join('users','classes.userId','=','users.id')
        .select(['classes.*','users.*']);
        return response.json(classes);
    }
}