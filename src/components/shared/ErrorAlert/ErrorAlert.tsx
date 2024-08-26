import styles from "./ErrorAlert.module.sass"

interface Props {
	reset: () => void
} 

export const ErrorAlert = ({ reset }: Props) => {
  return (
	<div className={styles.ErrorAlert}>
		<h1>:c</h1>
		<p>Ha ocurrido un error</p>
		<button onClick={reset}>Intentar de nuevo</button>
	</div>
  )
}