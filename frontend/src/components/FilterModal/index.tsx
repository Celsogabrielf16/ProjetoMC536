import React, { useMemo, useState } from 'react';
import Modal from 'react-modal';
import { atom, useAtom } from 'jotai';
import * as Yup from 'yup';

Modal.setAppElement('#root');

import * as Styled from './styles';

import Work from './Tabs/Work';
import Company from './Tabs/Company';
import Localization from './Tabs/Localization';

import { schema } from './Tabs/schemas';
export type SchemaType = Yup.InferType<typeof schema>;

import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSaveFilters: (filters: SchemaType) => void;
}

type Tab = 'Obra' | 'Empresa' | 'Localização';
const TABS: Array<Tab> = ['Obra', 'Empresa', 'Localização'];

const tabAtom = atom<Tab | null>(null);

const FilterModal: React.FC<Props> = ({ isOpen, onClose, onSaveFilters }) => {
  const [tab, setTab] = useAtom(tabAtom);
  const currTab = tab ?? TABS[0];

  const tabActiveIndex = useMemo(
    () => TABS.findIndex((curr) => curr === currTab),
    [TABS, currTab]
  );

  const methods = useForm<SchemaType>({
    mode: 'onChange',
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          background: 'transparent',
        },
        content: {
          top: '25%',
          left: '50%',
          height: 'fit-content',
          background: '#1E1E1F',
          marginRight: '4%',
          border: 'none',
        },
      }}
    >
      <form
        id="filters"
        onSubmit={methods.handleSubmit((data) => {
          onSaveFilters(data);
          onClose();
        })}
      >
        <FormProvider {...methods}>
          <Styled.Wrapper>
            <Styled.Tabs>
              {TABS.map((tab, idx) => (
                <Styled.Tab
                  key={tab}
                  checked={idx === tabActiveIndex}
                  onClick={() => setTab(tab)}
                >
                  <span>{tab}</span>
                </Styled.Tab>
              ))}
            </Styled.Tabs>

            {currTab === 'Obra' && <Work />}
            {currTab === 'Empresa' && <Company />}
            {currTab === 'Localização' && <Localization />}

            <Styled.Buttons>
              <Styled.Button
                variant="clear"
                type="button"
                onClick={() => methods.reset()}
              >
                Limpar
              </Styled.Button>
              <Styled.Button variant="search" type="submit">
                Buscar
              </Styled.Button>
            </Styled.Buttons>
          </Styled.Wrapper>
        </FormProvider>
      </form>
    </Modal>
  );
};

export default FilterModal;
