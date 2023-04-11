import Detail from "../Detail";
import { useContext, useState } from "react";
import { MotorShopContext } from "../../context";
import { FontIntegerNormal, FontIntegerLight } from "../../style/fonts";
import {
  ContainerCardComment,
  ContainerDetailAndCreation,
  CreationTime,
  Div,
  InputDescripition,
} from "./style";
import InputCommentEdit from "../InputCommentEdit";

const CardComment = ({ ...props }) => {
  const { user, deleteComment } = useContext(MotorShopContext);
  const creatioTime = (time: string): string => {
    const dateHourString = time;
    const dateHour = new Date(dateHourString);
    const now = new Date();
    const diffMs = now.getTime() - dateHour.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHour = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDays / 7);
    const diffMonth = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonth / 12);

    if (diffSeconds < 60) {
      return "agora";
    } else if (diffMinutes < 60) {
      return `há ${diffMinutes} ${diffMinutes === 1 ? "minuto" : "minutos"}`;
    } else if (diffHour < 24) {
      return `há ${diffHour} ${diffHour === 1 ? "hora" : "horas"}`;
    } else if (diffDays < 7) {
      return `há ${diffDays} ${diffDays === 1 ? "dia" : "dias"}`;
    } else if (diffWeek < 4) {
      return `há ${diffWeek} ${diffWeek === 1 ? "semana" : "semanas"}`;
    } else if (diffMonth < 12) {
      return `há ${diffMonth} ${diffMonth === 1 ? "mês" : "meses"}`;
    } else {
      return `há ${diffYears} ${diffYears === 1 ? "ano" : "anos"}`;
    }
  };

  const editString = (create: string, update: string): string => {
    const createdAt = new Date(create);
    const updatedAt = new Date(update);
    if (createdAt < updatedAt) {
      return " • Editado";
    } else {
      return "";
    }
  };

  const owner_comment = (idOwner: string, idUser: string): boolean => {
    if (idOwner === idUser) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ContainerCardComment>
      <ContainerDetailAndCreation>
        <Detail
          name={props.name}
          colorFont="--grey1"
          avatarColor={props.avatarColor}
        />
        <CreationTime>
          • {creatioTime(props.time)}
          {editString(props.create, props.update)}
        </CreationTime>
      </ContainerDetailAndCreation>
      {props.isActive ? (
        <>
          <InputCommentEdit
            idComment={props.id}
            close={props.close}
            description={props.description}
          />
        </>
      ) : (
        <>
          <FontIntegerNormal>{props.description}</FontIntegerNormal>
          {owner_comment(props.idOwner, user.id) && (
            <Div>
              <FontIntegerLight
                onClick={() => {
                  props.open(props.id);
                }}
              >
                Editar
              </FontIntegerLight>
              <FontIntegerLight>•</FontIntegerLight>
              <FontIntegerLight onClick={() => deleteComment(props.id)}>
                Excluir
              </FontIntegerLight>
            </Div>
          )}
        </>
      )}
    </ContainerCardComment>
  );
};

export default CardComment;
