import * as React from 'react';

interface HelloProps {
  name?: string;
}

export class Hello extends React.Component<HelloProps> {
  public constructor(props: {}) {
    super(props);
  }
  public render(): React.ReactNode {
    const name = this.props.name ?? 'Unknown';
    return (
      <b>Hello, {name}!</b>
    );
  }
}
