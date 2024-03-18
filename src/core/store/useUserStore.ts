import type {} from '@redux-devtools/extension';

import { devtools, persist } from 'zustand/middleware';

import { create } from 'zustand';

interface BearState {
	email: string;
	status: boolean;
	setAuth: (email: string) => void;
	logOut: () => void;
}

export const useUserStore = create<BearState>()(
	devtools(
		persist(
			(set) => ({
				email: '',
				status: false,
				setAuth: (email: string) => {
					set({ status: true, email: email });
				},
				logOut: () => set({ status: false, email: '' }),
			}),
			{
				name: 'user-storage',
			},
		),
	),
);
