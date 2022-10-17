import React, { useState } from 'react';
import IconArrowDown from '../../assets/icons/arrow_down.svg';
import { MaterialsHeader } from './MaterialsHeader';
import { FoldersTree } from './FoldersTree';

// import { ReactComponent as IconFolder } from '../../assets/icons/card/folder.svg';

interface IDataTestProps {
  text?: string;
  folders?: any;
}

export const Materials: React.FC<IDataTestProps> = React.memo(({ text, folders }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const switchCollapsed = (): void => {
    setIsCollapsed((prevState: boolean) => !prevState);
  };

  return (
    <div
      className={`relative flex flex-col w-full bg-dark rounded-component px-6 py-4 ${
        isCollapsed ? 'h-[298px] overflow-hidden' : 'h-full'
      }`}
    >
      <MaterialsHeader />
      {text && <div className="text-[#515151] mb-[61px]">{text}</div>}
      <div className="w-full h-[10px] border-b-2 border-[#272727] mb-8"></div>
      <button onClick={switchCollapsed} className="absolute bottom-2 left-[47%] z-10">
        <img
          className={`${isCollapsed ? '' : 'rotate-180'}`}
          src={IconArrowDown}
          alt="arrow_down"
        />
      </button>
      {folders && <FoldersTree folders={folders} />}
      <div
        className={`absolute bottom-0 left-0 h-[120px] w-full bg-gradient-to-b from-[rgba(30,30,30,0.15)] to-[rgb(30,30,30,1)] z-0
      ${isCollapsed ? '' : 'h-0'}`}
      ></div>
    </div>
  );
});
