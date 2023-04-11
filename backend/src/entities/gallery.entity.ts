import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import Ad from "./ad.entity";

@Entity("galleries")
class Gallery {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 1000, default: "" })
	urlImage1: string;

	@Column({ length: 1000, default: "" })
	urlImage2: string;

	@Column({ length: 1000, default: "" })
	urlImage3: string;

	@Column({ length: 1000, default: "" })
	urlImage4: string;

	@Column({ length: 1000, default: "" })
	urlImage5: string;

	@Column({ length: 1000, default: "" })
	urlImage6: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => Ad, (ad) => ad.gallery, { onDelete: "CASCADE" })
	@JoinColumn()
	ad: Ad;
}

export default Gallery;
