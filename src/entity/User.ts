import {Entity, Column, PrimaryColumn} from "typeorm"

@Entity()
export class User {

    @PrimaryColumn({length:255})
    id: string // 지원자 아이디

    @Column()
    name: string // 지원자 이름

}
