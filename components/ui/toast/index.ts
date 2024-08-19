import Toast from 'react-native-toast-message';

export type OldToastFn = (name: string, params: Record<string, any>) => void;

export function ToastSuccess(title: string, desc?: string) {
  if (desc !== undefined) {
    Toast.show({ type: 'success', text1: title, text2: desc });
    return;
  }
  Toast.show({ type: 'success', text1: title });
}

export function ToastError(title: string, desc?: string) {
  if (desc !== undefined) {
    Toast.show({ type: 'error', text1: title, text2: desc });
    return;
  }
  Toast.show({ type: 'error', text1: title });
}

export function ToastInfo(title: string, desc?: string) {
  if (desc !== undefined) {
    Toast.show({ type: 'info', text1: title, text2: desc });
    return;
  }
  Toast.show({ type: 'error', text1: title });
}
