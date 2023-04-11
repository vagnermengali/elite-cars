import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MotorShopContext } from "../../context";
import Button from "../Button";
import Detail from "../Detail";
import {
  CustomLi,
  ContainerPriceYearKm,
  InfoCard,
  InfoKmYear,
  CarImg,
  FontCardDescription,
  FontCardTitle,
  FontPrice,
  ButtonAuction,
  ContainerInfoCard,
  RightArrow,
  Clock,
  ContainerCarImg,
  IsActiveInfo,
} from "./style";

const Card = ({ auction = false, ...props }) => {
  const { setOpenModalUpdateAd, getAdbyId, getAdbyIdNotOwner } =
    useContext(MotorShopContext);

  const navigate = useNavigate();

  const handleClickUpdate = async () => {
    await getAdbyId(props.id);
    setOpenModalUpdateAd(true);
  };

  const handClickDetail = async () => {
    await getAdbyId(props.id);
    navigate(`/detail-ad/${props.id}`, { replace: true });
  };

  const handleClickAdvertiser = async () => {
    if (!props.advertiser && props.isActive) {
      await getAdbyIdNotOwner(props.id);
      navigate(`/detail-ad/${props.id}`, { replace: true });
    }
  };
  return (
    <CustomLi key={props.id} auction={auction} advertiser={props.advertiser}>
      {!auction && (
        <ContainerCarImg onClick={handleClickAdvertiser}>
          {!props.advertiser && props.tags && (
            <IsActiveInfo isActive={props.isActive}>
              {props.isActive ? "Ativo" : "Inativo"}
            </IsActiveInfo>
          )}
          <CarImg src={props.urlCoverImage} alt="car card" />
        </ContainerCarImg>
      )}
      <ContainerInfoCard
        auction={auction}
        image={props.urlCoverImage}
        onClick={handleClickAdvertiser}
      >
        <InfoCard auction={auction}>
          {auction && (
            <Clock>
              <img src="/img/clock.png" alt="clock" />
              <span>01:58:00</span>
            </Clock>
          )}
          <FontCardTitle auction={auction}>{props.title}</FontCardTitle>
          <FontCardDescription auction={auction}>
            {props.description}
          </FontCardDescription>
          {!props.advertiser && (
            <Detail
              auction={auction}
              name={props.user.name}
              image={props.userImage}
              avatarColor={props.user.avatarColor}
            />
          )}
          <ContainerPriceYearKm auction={auction}>
            <div>
              <InfoKmYear>{props.mileage} KM</InfoKmYear>
              <InfoKmYear>{props.year}</InfoKmYear>
            </div>
            <FontPrice>R$ {props.price}</FontPrice>
          </ContainerPriceYearKm>
        </InfoCard>
      </ContainerInfoCard>
      {!auction && props.advertiser && (
        <>
          <Button
            component="medium"
            color="grey1"
            border="grey1"
            bgcolor="tranparent"
            width="5rem"
            hover={{ bgcolor: "grey6" }}
            style={{ marginRight: "0.625rem" }}
            onClick={handleClickUpdate}
          >
            Editar
          </Button>
          <Button
            component="medium"
            color="grey1"
            border="grey1"
            bgcolor="tranparent"
            width="6.5625rem"
            hover={{ bgcolor: "grey6" }}
            style={{ marginLeft: "0.625rem" }}
            onClick={handClickDetail}
          >
            Ver como
          </Button>
        </>
      )}
      {auction && props.advertiser && (
        <ButtonAuction style={{ justifyContent: "flex-start", gap: "1.25rem" }}>
          <Button
            type="button"
            component="medium"
            bgcolor="tranparent"
            color="whiteFixed"
            border="whiteFixed"
            width="8.125rem"
            hover={{ bgcolor: "brand2" }}
            onClick={handleClickUpdate}
          >
            Editar
          </Button>
          <Button
            type="button"
            component="medium"
            bgcolor="tranparent"
            color="whiteFixed"
            border="whiteFixed"
            width="8.125rem"
            hover={{ bgcolor: "brand2" }}
            onClick={handClickDetail}
          >
            Ver como
          </Button>
        </ButtonAuction>
      )}
      {auction && !props.advertiser && (
        <ButtonAuction>
          <span>Acessar página do leilão</span>
          <RightArrow src="/img/right_arrow.png" alt="right arrow" />
        </ButtonAuction>
      )}
    </CustomLi>
  );
};

export default Card;
