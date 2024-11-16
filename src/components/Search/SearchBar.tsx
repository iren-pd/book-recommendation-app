import { Button } from '@recobook/components/ui/Button';
import { SearchInput } from '@recobook/components/ui/SearchInput';

export const SearchBar = () => {
    return (
        <div className="flex items-center justify-around">
            <SearchInput />
            <Button text='Поиск'/>
        </div>
    );
};
