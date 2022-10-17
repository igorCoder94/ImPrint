import React from 'react';
import { Materials, Filtration, Options } from '../../components';
import dataTest from '../../data/test/pageWatchTest';
import { InputSearch } from '../../ui';
import { data } from '../../data/test/folders';

export const PageWatch: React.FC = () => (
  <div className="h-full w-full grid grid-cols-[3fr_2fr] px-6 gap-[60px] overflow-y-visible overflow-x-hidden scrollbar">
    <div className="flex flex-col justify-start gap-4">
      <Materials text={dataTest.text} />
      <Materials text={'описание pipeline'} folders={data} />
    </div>
    <div className="flex flex-col justify-start rounded-component gap-4">
      <Filtration />
      <Options text={'Категории'} />
      <Options text={'Тэги'} />
      <Options text={'Ключевые слова'} />
      {/* <div className="flex justify-center align-middle rounded-component h-[40px] bg-[linear-gradient(90deg,#4F60FF_27.54%,#0ACCE7_81.35%)]"> */}
      {/*  Название материала */}
      {/* </div> */}
      <InputSearch />
      {/* <div className="rounded-component bg-white h-full"></div> */}
    </div>
  </div>
);
