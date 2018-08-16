package com3014.group3.markit.service.impl;

import com3014.group3.markit.model.Forex;
import com3014.group3.markit.service.ForexService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Harry
 */
@Service("forexService")
@Transactional
public class ForexServiceImpl extends AbstractGenericService<Integer, Forex> implements ForexService {

}
