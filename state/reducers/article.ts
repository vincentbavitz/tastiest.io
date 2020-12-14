import { IArticle } from '../../types/article';

export const initialArticleState: IArticle | {} = {};

export enum ArticleActions {
  SET_ARTICLE = 'SET_ARTICLE',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //

export const setArticle = (article: IArticle) => ({
  type: ArticleActions.SET_ARTICLE,
  payload: article,
});

export interface ArticleAction {
  type: ArticleActions;
  payload: any;
}

export const articleReducer = (
  state: IArticle | {} = initialArticleState,
  action: ArticleAction,
): IArticle | {} => {
  switch (action.type) {
    case ArticleActions.SET_ARTICLE: {
      return { ...action.payload };
    }
    default:
      return state;
  }
};
