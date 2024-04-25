import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import Card from '../../components/Card';

describe('Card', () => {
  test('renders children inside CardContainer', () => {
    
    const children = <div data-testid="child">Hello World</div>;

    
    const { getByTestId } = render(<Card>{children}</Card>);

    
    expect(getByTestId('child')).toBeInTheDocument();
  });

  test('applies custom classes to CardContainer', () => {
    
    const children = <div data-testid="child">Hello World</div>;
    const customClasses = 'custom-class1 custom-class2';

    
    const { container } = render(<Card classes={customClasses}>{children}</Card>);

    
    const cardContainer = container.firstChild as HTMLElement;
    expect(cardContainer).toHaveClass(customClasses);
  });

  test('renders CardContainer with default styles', () => {
    
    const children = <div data-testid="child">Hello World</div>;

    
    const { container } = render(<Card>{children}</Card>);

    
    const cardContainer = container.firstChild as HTMLElement;
    expect(cardContainer).toHaveStyle(`
      background-color: #3b82f6;
      border-radius: 0.5rem;
    `);
  });
});
