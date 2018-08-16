package com3014.group3.markit.dao.impl;

import com3014.group3.markit.model.Forex;
import com3014.group3.markit.dao.ForexDao;

import org.springframework.stereotype.Repository;

/**
 *
 * @author Harry
 */
@Repository("forexDao")
public class ForexDaoImpl extends AbstractGenericDao<Integer, Forex> implements ForexDao {

}
