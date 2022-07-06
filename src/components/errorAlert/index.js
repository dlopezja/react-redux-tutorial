import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function ErrorAlert({statusCode, description}) {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
       {description} <strong>{statusCode}</strong>
    </Alert>

  );
}
