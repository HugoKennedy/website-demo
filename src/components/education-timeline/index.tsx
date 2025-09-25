import React from 'react';

const EducationTimeline = (): React.JSX.Element => {
  // Newest first (top) -> Oldest last (bottom)
  const entries = [
    { label: 'Sungkyunkwan University', time: 'September 2025 - Present' },
    { label: 'IP Paris', time: '2024 - 2025' },
    { label: 'CPGE lycée Hoche', time: '2022 - 2024', logo: 'hoche.webp' },
  ];

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body p-8">
        <div className="mx-3 mb-2">
          <h5 className="card-title">
            <span className="text-base-content opacity-80 text-xl">Education</span>
          </h5>
        </div>
        <div className="text-base-content">
          <ol className="relative border-l border-base-300 border-opacity-30 my-4 mx-6 space-y-6">
            {entries.map((item, index) => (
              <li className="ml-5" key={index}>
                <div
                  className="absolute w-3 h-3 bg-base-300 rounded-full border border-base-300 mt-2"
                  style={{ left: '-6px' }}
                ></div>
                <div className="my-1 text-sm opacity-80">{item.time}</div>
                <div className="mb-2 text-lg font-medium leading-snug flex items-center gap-3">
                  <span>{item.label}</span>
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={item.label}
                      className="h-6 w-6 object-contain opacity-90"
                      loading="lazy"
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;


