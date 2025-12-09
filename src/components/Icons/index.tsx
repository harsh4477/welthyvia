type IconProps = {
  className?: string;
  size?: number | string;
  color?: string;
};

export const TargetIcon = ({
  className = "w-6 h-6",
  size = 24,
  color = "currentColor",
}: IconProps) => (
  <svg
    className={className}
    height={size}
    width={size}
    version="1.1"
    id="_x32_"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill={color}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <path d="M204.762,254.456l34.212-34.204c-39.807-18.293-88.544-11.079-121.29,21.675 c-42.013,42.006-42.013,110.372,0,152.393c42.005,42.014,110.38,42.014,152.386,0c32.746-32.745,39.968-81.49,21.675-121.298 l-34.211,34.211c3.381,19.976-2.553,41.224-17.939,56.604c-25.21,25.218-66.225,25.218-91.434,0 c-25.21-25.21-25.21-66.224,0-91.427C163.546,257.016,184.794,251.074,204.762,254.456z"></path>{" "}
        <path d="M323.628,241.146c34.324,57.876,26.642,133.939-23.076,183.65c-58.826,58.826-154.527,58.826-213.345,0 c-58.826-58.817-58.826-154.527,0-213.352c49.703-49.711,125.775-57.393,183.65-23.076l31.216-31.225 c-75.387-50.693-178.754-42.77-245.35,23.817c-75.629,75.621-75.629,198.69,0,274.311c75.63,75.638,198.683,75.638,274.312,0 c66.603-66.595,74.518-169.962,23.809-245.358L323.628,241.146z"></path>{" "}
        <path d="M511.279,84.84c-1.61-4.195-5.684-6.78-10.298-6.57l-70.565,3.31l3.318-70.556 c0.201-4.622-2.384-8.68-6.578-10.306c-4.17-1.61-9.122-0.451-12.52,2.931l-75.299,75.306l-3.809,81.322L198.634,297.162 c-6.964-1.578-14.565,0.29-19.992,5.716c-8.422,8.422-8.422,22.062,0,30.484c8.414,8.422,22.062,8.422,30.484,0 c5.418-5.427,7.295-13.028,5.716-20l136.886-136.894l81.314-3.8l75.307-75.316C511.739,93.963,512.89,89.026,511.279,84.84z"></path>{" "}
      </g>
    </g>
  </svg>
);

export const UsersIcon = ({
  className = "w-6 h-6",
  size = 24,
  color = "currentColor",
}: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 104.745 104.745"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <rect x="42.5" y="17.812" width="18.745" height="18.745"></rect>
      <rect y="68.188" width="18.745" height="18.745"></rect>
      <rect x="42" y="68.188" width="18.745" height="18.745"></rect>
      <rect x="86" y="68.188" width="18.745" height="18.745"></rect>
      <path d="M98.088,57.084c0.743,0.65,1.062,1.731,0.98,3.306l1.998,0.104c0.117-2.227-0.428-3.834-1.661-4.914 c-2.966-2.597-9.188-1.428-18.61,0.338c-7.848,1.473-17.52,3.252-28.497,3.472V40.812h-2V59.39 c-10.978-0.22-20.648-1.999-28.496-3.472c-9.419-1.767-15.644-2.935-18.61-0.338c-1.234,1.08-1.778,2.688-1.661,4.914l1.998-0.104 c-0.083-1.574,0.237-2.655,0.98-3.306c2.234-1.955,8.716-0.739,16.924,0.801c7.892,1.479,17.604,3.277,28.688,3.511v0.046 c0.399,0,0.782-0.02,1.177-0.023c0.396,0.004,0.779,0.023,1.178,0.023v-0.046c11.084-0.233,20.797-2.031,28.688-3.511 C89.371,56.345,95.854,55.129,98.088,57.084z"></path>
    </g>
  </svg>
);

export const FileTextIcon = ({
  className = "w-6 h-6",
  size = 24,
  color = "currentColor",
}: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M14 11H8M10 15H8M16 7H8M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11.5M22 22L20.5 20.5M21.5 18C21.5 19.933 19.933 21.5 18 21.5C16.067 21.5 14.5 19.933 14.5 18C14.5 16.067 16.067 14.5 18 14.5C19.933 14.5 21.5 16.067 21.5 18Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
);

export const ShieldCheckIcon = ({
  className = "w-6 h-6",
  size = 24,
  color = "currentColor",
}: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <title>security-verified-solid</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width="48" height="48" fill="none"></rect>
        </g>
        <g id="icons_Q2" data-name="icons Q2">
          <path d="M24,2S6,7.1,6,8V26.2c0,9.2,13.3,17.3,17,19.5a1.8,1.8,0,0,0,2,0c3.8-2.1,17-10.3,17-19.5V8C42,7.1,24,2,24,2Zm9.4,16.4-11,11a1.9,1.9,0,0,1-2.8,0l-4.9-4.9a2.2,2.2,0,0,1-.4-2.7,2,2,0,0,1,3.1-.2L21,25.2l9.6-9.6a2,2,0,0,1,2.8,2.8Z"></path>
        </g>
      </g>
    </g>
  </svg>
);
