import Image from 'next/image'
import styled from 'styled-components'

function SearchBook({ acc_no,
    ref_no,
    title,
    pub_year,
    edition_name }) {

    const img = '/images/book.jpg'

    return (
        <Wrapper>
            <img src='/images/am.jpg' />
            <Content>
                <div className='title'>
                    <strong>Book name:</strong> {title}
                </div>
                <div className='ids'>
                    <strong>Accession number:</strong> {acc_no}
                </div>
                <div className='ids'>
                    <strong>Accession number:</strong> {ref_no}
                </div>
                <div className='ids'>
                    <strong>Accession number:</strong> {pub_year}
                </div>
                <div className='ids'>
                    <strong>Accession number:</strong> {edition_name}
                </div>
            </Content>
        </Wrapper>
    )
}

export default SearchBook


const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 1% 0;
    transition: 200ms ease-in all;
    padding: 2% 1%;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05);
    cursor: pointer;
    &:hover{
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
`
const Content = styled.div`
    line-height: 2.5rem;
    .title{
        font-size: 25px;
    }
`