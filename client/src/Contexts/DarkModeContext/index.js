import React from 'react';
import { getLocalAuth } from '../../Utils';
import { createCtx } from '../index';

const [ctx, Provider] = createCtx(false);

export const DarkModeContext = ctx;
export const DarkModeContextProvider = Provider;
