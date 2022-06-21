import {Entity, Column, PrimaryColumn} from "typeorm"

@Entity()
export class Company {

    @PrimaryColumn({length:255})
    id: string // 회사 아이디

    @Column()
    name: string // 회사명 이름

}