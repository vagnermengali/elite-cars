import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import User from "./user.entity";

@Entity("address")
class Address {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 10 })
	cep: string;

	@Column({ length: 50 })
	state: string;

	@Column({ length: 50 })
	city: string;

	@Column({ length: 200 })
	street: string;

	@Column()
	number: string;

	@Column({ length: 500 })
	complement: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => User, (user) => user.address, { onDelete: "CASCADE" })
	@JoinColumn()
	user: User;

}

export default Address;
