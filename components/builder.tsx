'use client';

import { BuilderComponent, builder } from '@builder.io/react';
import type { BuilderContent } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderPageProps {
  content: BuilderContent | null;
}

export default function BuilderPage({ content }: BuilderPageProps) {
  if (!content && !builder.isEditing && !builder.isPreviewing) {
    return <div>Page not found</div>;
  }

  return <BuilderComponent model="page" content={content} />;
}
