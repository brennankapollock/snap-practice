const MIN = 0;
const MAX = 100;

export default function ProgressBar({ value }) {
  // Handle invalid values and convert them to be within [0, 100].
  const clampedValue = Math.min(Math.max(value, MIN), MAX);

  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: `${clampedValue}%` }}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
      >
        {clampedValue}%
      </div>
    </div>
  );
}

// CSS

// body {
//   font-family: sans-serif;
// }

// .progress {
//   background-color: rgb(233, 236, 239);
//   border: 1px solid #c5c5c5;
//   border-radius: 8px;
//   height: 20px;
// }

// .progress-bar {
//   background-color: #0d6efd;
//   color: #fff;
//   height: 100%;
//   overflow: hidden;
//   text-align: center;
// }
