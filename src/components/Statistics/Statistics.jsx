export const Statistics = ({
  total,
  options,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <ul>
        {options.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
    </>
  );
};
