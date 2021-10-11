import { useDispatch, useSelector } from 'react-redux';
import { setHeaderTransparency } from 'state/navigation';
import { IState } from 'state/reducers';

export const useHeaderTransparency = () => {
  const { headerTransparency: transparent } = useSelector(
    (state: IState) => state.navigation,
  );

  const dispatch = useDispatch();
  const setTransparancy = (transparent: boolean) =>
    dispatch(setHeaderTransparency(transparent));

  return { transparent, setTransparancy };
};
