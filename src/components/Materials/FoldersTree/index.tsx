import React, { useState } from 'react';
import IconFolder from '../../../assets/icons/card/folder.svg';
import IconBook from '../../../assets/icons/card/book_opened.svg';

interface FoldersTreeProps {
  folders: any;
}

export const FoldersTree: React.FC<FoldersTreeProps> = ({ folders }) => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`flex flex-row mb-5 cursor-pointer`}
        onClick={() => {
          if (folders.children) {
            setExpand(!expand);
          }
        }}
      >
        {!folders.isBook ? (
          <img className="mr-8 mt-[-4px]" src={IconFolder} alt="folder" />
        ) : (
          <img className="mr-8 mt-[-4px]" src={IconBook} alt="folder" />
        )}
        <span>{folders.name}</span>
      </div>

      <div style={{ display: expand ? 'block' : 'none' }} className="ml-16">
        {folders?.children?.map((folder: any, index: number) => (
          <FoldersTree key={index} folders={folder} />
        ))}
      </div>
    </div>
  );
};
