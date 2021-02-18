import Link from 'next/link'
import { ReactNode } from 'react'
import {MeuBotao,Lista,Li} from '../navigation/componentsstyled'

/* Paginas de navegação */
const LINKS = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Mac',
        path: '/about'
    },
    {
        name: 'iPad',
        path: '/'
    },
    {
        name: 'iPhone',
        path: '/'
    },
    {
        name: 'Watch',
        path: '/'
    },
    {
        name: 'TV',
        path: '/'
    },
    {
        name: 'Music',
        path: '/'
    },
    {
        name: 'Suport',
        path: '/'
    },
    {
        name: 'Search',
        path: '/'
    },
    {
        name: 'Shop',
        path: '/'
    },
]
/* Tipo de dados do componente NAVANCHOR */
type NavAnchor = {
    path: string,
    children: ReactNode
}
/* Retorna o path e suas propriedades */
function NavAnchor({ path, children }: NavAnchor) {
    return (
        <Link href={path} >
            <MeuBotao>
                <a>{children}</a>
            </MeuBotao>
        </Link>
    )
}
export default function Navigation() {
    /* Chama a rota */
    //const { pathname } = useRouter()
    return (
        
            <Lista >
                {LINKS.map(({ name, path }) => ( /* Mapeia o array de navegação */
                    <Li key={path}>
                        <NavAnchor path={path}>{name}</NavAnchor>
                    </Li>
                ))}
            </Lista>
       
    )
}