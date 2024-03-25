type RedButtonProps = {
  text: string,
  action: (e: any) => void, 
  style?: {}
}

export default function RedButton({text, action, style}: RedButtonProps) {
  return (
    <button
      style={{
        color: 'black',
        backgroundColor: '#fa3a1e',
        fontSize: 18,
        fontWeight: 600,
        border: 0,
        padding: 0,
        margin: 0,
        borderRadius: 0,
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        ...style
      }}
      onClick={(e) => action(e)}
    >
      {text}
    </button>
  )
}
