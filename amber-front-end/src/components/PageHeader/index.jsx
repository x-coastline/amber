import React from 'react';
import { Breadcrumb, Box, Typography } from '@alifd/next';
import styles from './index.module.scss';

const PageHeader = props => {
  const { breadcrumbs, title, components, ...others } = props;
  return (
    <Box spacing={8} className={styles.PageHeader} {...others}>
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <Breadcrumb className={styles.Breadcrumbs} separator=" / ">
          {breadcrumbs.map((item, index) => (
            <Breadcrumb.Item link={item.path} key={index}>{item.name}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      ) : null}
      {title && <Typography.Text className={styles.Title}>{title}</Typography.Text>}
    </Box>
  );
};

export default PageHeader;
