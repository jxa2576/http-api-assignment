const respond = (request, response, status, content, type) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(content);
  response.end();
};

const success = (request, response, acceptedTypes) => {
  const responseString = {
    message: 'This is a successful response',
  };

  if (acceptedTypes === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseString.message}</message>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 200, responseXML, 'text/xml');
  }
  const jsonString = JSON.stringify(responseString);
  return respond(request, response, 200, jsonString, 'application/json');
};

const badRequest = (request, response, acceptedTypes, params) => {
  const responseString = {
    id: 'badRequest',
    message: 'Query parameter set to true',
  };

  if (!params.valid || params.valid !== 'true') {
    responseString.message = 'Missing valid query parameter set equal to true';

    if (acceptedTypes === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <id>${responseString.id}</id>`;
      responseXML = `${responseXML} <message>${responseString.message}</message>`;
      responseXML = `${responseXML} </response>`;
      return respond(request, response, 400, responseXML, 'text/xml');
    }
    const jsonString = JSON.stringify(responseString);
    return respond(request, response, 400, jsonString, 'application/json');
  }

  if (acceptedTypes === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <id>${responseString.id}</id>`;
    responseXML = `${responseXML} <message>${responseString.message}</message>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 200, responseXML, 'text/xml');
  }
  const jsonString = JSON.stringify(responseString);
  return respond(request, response, 200, jsonString, 'application/json');
};

const unauthorized = (request, response, acceptedTypes, params) => {
  const responseString = {
    id: 'Unauthorized',
    message: 'LoggedIn query paramter set to yes',
  };

  if (!params.loggedIn || params.loggedIn !== 'yes') {
    responseString.message = 'Missing loggedIn query paramter set to yes';

    if (acceptedTypes === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <id>${responseString.id}</id>`;
      responseXML = `${responseXML} <message>${responseString.message}</message>`;
      responseXML = `${responseXML} </response>`;
      return respond(request, response, 401, responseXML, 'text/xml');
    }
    const jsonString = JSON.stringify(responseString);
    return respond(request, response, 401, jsonString, 'application/json');
  }

  if (acceptedTypes === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <id>${responseString.id}</id>`;
    responseXML = `${responseXML} <message>${responseString.message}</message>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 200, responseXML, 'text/xml');
  }
  const jsonString = JSON.stringify(responseString);
  return respond(request, response, 200, jsonString, 'application/json');
};

const forbidden = (request, response, acceptedTypes) => {
  const responseString = {
    id: 'forbidden',
    message: 'You do not have access to this content',
  };

  if (acceptedTypes === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <id>${responseString.id}</id>`;
    responseXML = `${responseXML} <message>${responseString.message}</message>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 403, responseXML, 'text/xml');
  }
  const jsonString = JSON.stringify(responseString);
  return respond(request, response, 403, jsonString, 'application/json');
};

const internal = (request, response, acceptedTypes) => {
  const responseString = {
    id: 'internalError',
    message: 'Internal server error. Something went wrong.',
  };

  if (acceptedTypes === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <id>${responseString.id}</id>`;
    responseXML = `${responseXML} <message>${responseString.message}</message>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 500, responseXML, 'text/xml');
  }
  const jsonString = JSON.stringify(responseString);
  return respond(request, response, 500, jsonString, 'application/json');
};

const notImplemented = (request, response, acceptedTypes) => {
  const responseString = {
    id: 'notImplemented',
    message: 'A get request has not been implemented for this page.',
  };

  if (acceptedTypes === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <id>${responseString.id}</id>`;
    responseXML = `${responseXML} <message>${responseString.message}</message>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 501, responseXML, 'text/xml');
  }
  const jsonString = JSON.stringify(responseString);
  return respond(request, response, 501, jsonString, 'application/json');
};

const notFound = (request, response, acceptedTypes) => {
  const responseString = {
    id: 'notFound',
    message: 'The page you are looking for was not found.',
  };

  if (acceptedTypes === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <id>${responseString.id}</id>`;
    responseXML = `${responseXML} <message>${responseString.message}</message>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 404, responseXML, 'text/xml');
  }
  const jsonString = JSON.stringify(responseString);
  return respond(request, response, 404, jsonString, 'application/json');
};

module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  notFound,
};
