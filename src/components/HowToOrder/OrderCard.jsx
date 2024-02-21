import styles from "./OrderCard.module.css";

const OrderCard = ({ stepNumber, stepTitle, stepDescription, secondNumber, secondTitle, secondDescription }) => {

    const containsDigitInNumberCircle = /\d/.test(secondNumber);
    const containsDigitInStepNumber = /\d/.test(stepNumber);

    return (
        <div className={styles.wrapperCard}>
            {containsDigitInNumberCircle && (
                <div className={styles.secondNumber}>
                    <span>{secondNumber}</span>
                </div>
            )}
            {containsDigitInStepNumber && (
                <div className={styles.stepNumber}>
                    <span>{stepNumber}</span>
                </div>
            )}
            <div className={styles.littleCircle}></div>
            <div className={styles.textwrapper}>
                <h3 className={styles.h3}>{stepTitle}</h3>
                <h4 className={styles.h4}>{secondTitle}</h4>
                <span className={styles.description}>{stepDescription}</span>
                <span className={styles.descriptions}>{secondDescription}</span>
            </div>
            
        </div>
    );
};

export default OrderCard;
