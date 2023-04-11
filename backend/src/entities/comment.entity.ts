import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import Ad from "./ad.entity";
import User from "./user.entity";

@Entity("comments")
class Comment {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 500 })
	description: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => Ad, { onDelete: "CASCADE" })
	ad: Ad;

	@ManyToOne(() => User, { onDelete: "CASCADE" })
	owner: User;
}

export default Comment;
