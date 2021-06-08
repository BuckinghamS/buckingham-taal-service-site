import React, { useState } from 'react'
import Blogcard from './BlogCard'
import {
  BlogEmptyState,
  BlogCategory,
  BlogCategoryContainer,
  BlogGrid,
  BlogHero,
} from './BlogOverviewStyles'
import { slice, concat } from 'lodash'
import { Button } from '../../Elements'
import Category from './BlogCategory'

const BlogOverview = (props) => {
  const { allPosts, categories } = props

  const DATA = [...allPosts]
  const LIMIT = 6
  const START_CAT = 'alles'
  const NO_BLOGS_FOUND = 'Geen gerelateerde blogs gevonden.'

  const [showMore, setShowMore] = useState(DATA.length > 6)
  const [filteredList, setFilteredList] = useState(DATA)
  const [baseList, setBaseList] = useState(slice(DATA, 0, LIMIT))
  const [index, setIndex] = useState(LIMIT)
  const [selected, setSelected] = useState(START_CAT)

  const loadMore = () => {
    const newIndex = index + LIMIT
    const newShowMore = newIndex < filteredList.length + 1 - 1
    const newList = concat(baseList, slice(filteredList, index, newIndex))
    setIndex(newIndex)
    setBaseList(newList)
    setShowMore(newShowMore)
  }

  const filterCategory = (category) => {
    if (category === START_CAT) {
      setIndex(LIMIT)
      setBaseList(slice(DATA, 0, LIMIT))
      setFilteredList(DATA)
      setShowMore(DATA.length > 6)
    } else {
      const filterBlogs = DATA.filter((blog) =>
        blog.node.category.map((category) => category.title).includes(category)
      )
      const newShowMore = LIMIT < filterBlogs.length + 1 - 1
      setIndex(LIMIT)
      setBaseList(slice(filterBlogs, 0, LIMIT))
      setFilteredList(filterBlogs)
      setShowMore(newShowMore)
    }
  }

  const mappedCards =
    baseList && baseList.length > 0 ? (
      <BlogGrid>
        {baseList.map((item, index) => (
          <Blogcard key={index} item={item.node} />
        ))}
      </BlogGrid>
    ) : (
      <BlogEmptyState>
        <h3 className="block-header--white">{NO_BLOGS_FOUND}</h3>
      </BlogEmptyState>
    )

  const mappedCategories =
    categories.edges &&
    categories.edges.length > 0 &&
    categories.edges.map((category, index) => (
      <BlogCategory
        key={index}
        onClick={() => filterCategory(category.node.title)}
      >
        <div onClick={() => setSelected(category.node.title)}>
          <Category category={category.node.title} selected={selected} />
        </div>
      </BlogCategory>
    ))

  return (
    <>
      <BlogHero>
        <BlogCategoryContainer>
          {categories.edges && mappedCategories}
        </BlogCategoryContainer>
      </BlogHero>
      {mappedCards}
      {showMore && <Button>Test</Button>}
    </>
  )
}

export default BlogOverview
