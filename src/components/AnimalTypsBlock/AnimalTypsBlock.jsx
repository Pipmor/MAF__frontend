import bird from "../../assets/icons/animals/bird.svg";
import cat from "../../assets/icons/animals/cat.svg";
import chicken from "../../assets/icons/animals/chicken.svg";
import dog from "../../assets/icons/animals/dog.svg";
import fish from "../../assets/icons/animals/fish.svg";
import goat from "../../assets/icons/animals/goat.svg";
import horse from "../../assets/icons/animals/horse.svg";
import pig from "../../assets/icons/animals/pig.svg";

const configObject = {
  bird: bird,
  cat: cat,
  chicken: chicken,
  dog: dog,
  fish: fish,
  goat: goat,
  horse: horse,
  pig: pig,
};

export const AnimalTypsBlock = ({ types }) => {
  return (
    <div>
      {types?.map((type) => {
        return <img src={configObject[type]} alt="icon" />;
      })}
    </div>
  );
};
