import { Pagination } from '@/interfaces/molecules/inputControls/pagination';
import { useFindArticles } from '@/services/article/interface/ArticleController/findArticlesHandler/findArticlesHook';
import React, { useState } from 'react';

interface ICreateArticleCC {}

const CreateArticleCC: React.FC<ICreateArticleCC> = ({}) => {
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState(3);
  const [success, setSuccess] = useState(false);

  const { articles, isArticleLoading, isArticleError } = useFindArticles({
    pagination: { page: page, limit: pageSize },
    sort: { field: 'title', direction: '' },
  });

  /*  const { handleSubmit, reset } = useFormContext();
  const onSubmit = handleSubmit(async (data) => {
    const response = await createArticleHandler({ title: data.title, content: data.content });
    reset();
    setSuccess(true);
    notify({ type: NotificationType.SUCCESS, children: 'doner gregeb ehergter rwegerger egrergwergwe' });
  }); */

  if (isArticleLoading) return <div>....Loading</div>;
  if (isArticleError) return <div>....Error</div>;

  if (!articles) return <div>....empty</div>;

  const listItems = articles.data.map((article) => <li key={article.id}>{article.title}</li>);

  return (
    <div>
      {listItems}
      <div className='pagination-style mt-30'>
        <Pagination
          customClassNames='pagination-bar'
          currentPage={page}
          totalCount={articles.page.totalElements}
          pageSize={pageSize}
          onPageChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export { CreateArticleCC };
export type { ICreateArticleCC };
