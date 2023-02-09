import React from 'react';
import { Link } from '../../../Presentation/styledComponents/Link';
import { TextAdminHome, TitleAdminHome } from '../../../Presentation/styledComponents/TextAdminHome';
import { LinkColor } from '../../styles/theme';

export default function AdminPage() {
    return (
      <div>
          <TitleAdminHome>
            Olá, você é um ADMIN e possui funções de ADMIN!!
          </TitleAdminHome>
          <TextAdminHome>
            Clique abaixo para começar a utilizar as funcionalidades de ADMIN
          </TextAdminHome>
          <Link color={LinkColor.AMARELO} href='/admin/functions'>ADMIN</Link>
      </div>
  )
}