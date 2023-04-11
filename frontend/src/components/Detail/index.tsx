import { UserImg, ContainerUser, FontTwoLatters, FontUserName } from "./style";
import { DetailProps } from "../../interfaces/DetailProps/DetailProps";

const Detail = ({
	auction,
	colorFont,
	name,
	image,
	avatarColor,
}: DetailProps) => {
	const twoLetters = () => {
		if (name !== undefined) {
			const splitedName = name.split(" ");
			const first = splitedName[0][0];
			const second = splitedName.length > 1 ? splitedName[1][0] : "";
			return (
				<FontTwoLatters>
					{`${first}${second}`.toUpperCase()}
				</FontTwoLatters>
			);
		}
	};

	return (
		<ContainerUser>
			<UserImg colorRandom={avatarColor}>
				{image ? image : twoLetters()}
			</UserImg>
			<FontUserName auction={auction} colorFont={colorFont}>
				{name}
			</FontUserName>
		</ContainerUser>
	);
};

export default Detail;
