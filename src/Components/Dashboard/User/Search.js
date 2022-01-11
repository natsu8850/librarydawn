import { useRouter } from "next/router";
import { searchBookApi } from "../../../utils/booksAPI";
import Layout from "../../Layout/Layout";
import UserHeader from "./Header";
import SearchBook from "./SearchBook";

function UserSearchComp({ title, searchResults }) {
    return (
        <div>
            <UserHeader />
            <main className='flex'>
                <section style={{ flexGrow: '1', padding: '14px 6px 0 6px' }} >
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: '6px 0' }}>Search results for {title} </h1>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {(searchResults.length > 0) ?
                            searchResults.map(element =>
                            (
                                <SearchBook
                                    key={element.acc_no}
                                    acc_no={element.acc_no}
                                    ref_no={element.ref_no}
                                    title={element.title}
                                    pub_year={element.pub_year}
                                    edition_name={element.edition_name}
                                />
                            )
                            )
                            : <div>No search results</div>}
                    </div>
                </section>
            </main>
        </div >
    )
}

export default UserSearchComp

