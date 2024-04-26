import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET() {
    try {
        const db = await pool.getConnection()
        const query = 'select * from todoList'
        const [rows] = await db.execute(query)
        db.release()
        
        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}

// export async function POST(){
//         try {
//             const db = await pool.getConnection();
//             const query = 'insert into todolist values ? ?',[id,task]
//             const rows = await db.execute(query)
//             db.release()

//             return pool.commit()
//         }
// }