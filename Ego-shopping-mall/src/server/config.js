import  mysql from  'mysql';
 export const client =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'egoshopping'
});

export const clientHotel=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hotel'
});
export const getList= (sql,arr,callback) => {
    clientHotel.query(sql,arr,(err,result) => {
        if(err){
            callback(err)
            console.log(err);
            return;
        }
        else{
            callback(result)
        }
    });
}
const sqlClient = (sql,arr,callback) =>{
    client.query(sql,arr,(err,result)=>{
        if(err) {
            callback(err);
            console.log(err);
            return;
        }
        callback(result);
    })
}

export default sqlClient;