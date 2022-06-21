import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Posts{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company: string; // 회사 id

    @Column()
    position: string; // 채용포지션

    @Column()
    compensation: number; // 채용보상금

    @Column("text")
    detail: string; // 채용내용

    @Column()
    skill: string // 사용기술

    @CreateDateColumn("Timestamp")
    createdDate: Date; // 등록일자

    @CreateDateColumn("Timestamp")
    modifiedDate: Date; // 수정일자
}