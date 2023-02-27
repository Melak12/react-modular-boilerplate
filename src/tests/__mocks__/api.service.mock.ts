import AxiosMockAdapter from 'axios-mock-adapter';
import { axiosClient } from '@app/services/api.service';

export const httpApiMock = new AxiosMockAdapter(axiosClient, { delayResponse: 1000 });
