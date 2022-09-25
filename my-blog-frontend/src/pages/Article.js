import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './ArticleContent';
import Articles from '../components/Articles';

const Article = () => {
    let articleName = useParams();
    const article = articleContent.find((articlesName)=>articlesName.name === articleName.name)
    if(!article) return <h1  className='text-danger'><b> Article doesn't exist! </b> </h1>
    const otherArticles = articleContent.filter((article)=> article.name !== articleName.name)

  return (
    <div className="mb-20">
        <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">{article.title}</h1>
        {article.content.map((paragraph, index)=>( 
            <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
                {paragraph}
            </p>  
        ))}   
        <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">
        Other Articles:
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </div>
  )
}

export default Article