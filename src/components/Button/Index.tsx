import * as S from  "./styles"

interface StyledButtonProps {
  text: string;
  background?: string;
  handleAction: () => void
}

export default function StyledButton({ handleAction, text, background }: StyledButtonProps) {
  return (
    <S.Button background={background} onClick={handleAction}>{text}</S.Button>

  )
}