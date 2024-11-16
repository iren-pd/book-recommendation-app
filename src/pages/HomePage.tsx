import React, { FC } from 'react'
import { SearchBar } from '@recobook/components/Search/SearchBar'
import { SearchResults } from '@recobook/components/Search/SearchResults'

export const HomePage: FC = () => {
  return (
    <div>
        <SearchBar/>
        <SearchResults/>
    </div>
  )
}
