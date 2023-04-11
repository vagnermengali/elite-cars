export interface InputCommentEditProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	idComment: string
	close: () => void;
	description: string;
}
