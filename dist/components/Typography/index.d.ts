import React, { ReactNode } from 'react';
export interface ITypographyProps {
    children: ReactNode;
    className?: string;
    color?: 'default' | 'primary' | 'secondary';
    size?: 'detail' | 'body' | 'h1' | 'h2' | 'h3' | 'h4';
    component?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
}
export declare const Typography: React.FC<ITypographyProps>;
//# sourceMappingURL=index.d.ts.map