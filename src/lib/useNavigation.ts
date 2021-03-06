import { useRouter } from 'next/router';

import { TypePage } from './types';
import { isPreviewEnabled, withPreviewParam } from './preview';

export interface LinkProps {
  href: string;
  as: string;
}

function linkToPage(page: TypePage, isPreview: boolean): LinkProps {
  const slug = page.fields.slug;
  const pageType = page.fields.content?.sys.contentType.sys.id;

  switch (pageType) {
    default: {
      throw new Error('Page type is not supported yet');
    }
  }
}

function normalizePath(path: string) {
  // strip query params & trailing slashes
  return path.replace(/\?.*/, '').replace(/\/$/, '');
}

export function useNavigation() {
  const { query, asPath: currentPath, route } = useRouter();
  const isPreview = isPreviewEnabled(query);

  const linkTo = (page: TypePage) => {
    return linkToPage(page, isPreview);
  };

  const linkToPath = (url: string): LinkProps => {
    return {
      href: withPreviewParam(`${url}`, isPreview),
      as: withPreviewParam(`${url}`, isPreview),
    };
  };

  const isActive = (page: TypePage) => {
    const active = normalizePath(currentPath);
    const target = normalizePath(linkTo(page).as);

    return target === active;
  };

  return {
    currentPath,
    isPreview,
    route,
    linkTo,
    linkToPath,
    isActive,
  };
}
