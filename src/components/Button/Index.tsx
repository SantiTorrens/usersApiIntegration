import * as S from  "./styles"

interface StyledButtonProps {
  text: string;
  backgroundColor?: string;
  handleAction: () => void
}

export default function StyledButton({ handleAction, text, backgroundColor }: StyledButtonProps) {
  return (
    <S.Button backgroundColor={backgroundColor} onClick={handleAction}>{text}</S.Button>

  )
}