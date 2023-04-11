import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import Comment from "./comment.entity";
import Gallery from "./gallery.entity";
import User from "./user.entity";

@Entity("ads")
class Ad {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 6 })
	typeAd: string;

	@Column({ length: 200 })
	title: string;

	@Column({ length: 500 })
	description: string;

	@Column()
	year: number;

	@Column()
	mileage: number;

	@Column({ length: 12 })
	price: string;

	@Column({ default: true })
	isActive: boolean;

	@Column({ length: 5 })
	typeVehicle: string;

	@Column({ length: 1000 })
	urlCoverImage: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => User, (user) => user.ads,{onDelete: "CASCADE"})
	user: User;

	@OneToMany(() => Comment, (comment) => comment.ad)
	comments: Comment[];

	@OneToOne(() => Gallery, (gallery) => gallery.ad)
	gallery: Gallery;
}

export default Ad;
